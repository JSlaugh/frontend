// @ts-nocheck
import styled from 'styled-components';
import { useEffect, useState, useMemo, useSyncExternalStore } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useExpanded,
} from 'react-table';
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter';
import { Burialmain } from '../../Models/burialmain';
import { forEachChild } from 'typescript';
import { Textile } from '../../Models/textile';

const Styles = styled.div`
  padding: 1rem;
  .pagination > * {
    margin-right: 10px;
  }
  .pagination > button {
    margin-right: 0px;
  }
  .pagination > button:last-of-type {
    margin-right: 10px;
  }

  .ScrollCentral {
    scroll-direction: horizontal;
    overflow-x: scroll;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    margin-bottom: 5px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Define a default UI for filtering
function GlobalFilter({
  // @ts-expect-error:

  preGlobalFilteredRows,
  // @ts-expect-error:

  globalFilter,
  // @ts-expect-error:

  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Master Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  // @ts-expect-error:

  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search`}
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  // @ts-expect-error:

  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    // @ts-expect-error:

    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  // @ts-expect-error:

  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  );
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  // @ts-expect-error:
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '50px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  );
}

function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
  // @ts-expect-error:

  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

// Our table component
// @ts-expect-error:

function Table({ columns, data }) {
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows: any, id: any, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    flatRows,
    rows,
    prepareRow,
    // @ts-expect-error:
    page,
    // @ts-expect-error:
    canPreviousPage,
    // @ts-expect-error:
    canNextPage,
    // @ts-expect-error:
    pageOptions,
    // @ts-expect-error:
    pageCount,
    // @ts-expect-error:
    gotoPage,
    // @ts-expect-error:
    nextPage,
    // @ts-expect-error:
    previousPage,
    // @ts-expect-error:
    setPageSize,
    // @ts-expect-error:
    visibleColumns,
    // @ts-expect-error:

    preGlobalFilteredRows,
    // @ts-expect-error:

    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter, filters, expanded },
  } = useTable(
    {
      columns,
      data,
      // @ts-expect-error:

      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useExpanded,
    usePagination,
  );

  // We don't want to render all of the rows for this example, so cap
  // it for this use case

  return (
    <div className="ScrollCentral">
      <h2>Textile Filter</h2>
      <p className="card-subtitle">
        This DataTable allows you to sort through Textiles
      </p>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <br />
    </div>
  );
}

// Define a custom filter filter function!
function filterGreaterThan(rows: any, id: any, filterValue: any) {
  return rows.filter((row: any) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val: any) => typeof val !== 'number';

function TextilesDataTableFilter() {
  const test = [
    {
      Header: 'Textile',
      columns: [
        {
          Header: 'ID or Locale',
          accessor: 'locale',
        },
        {
          Header: 'Color',
          accessor: 'colorValue',
        },
        {
          Header: 'Structure',
          accessor: 'structureValue',
        },
        {
          Header: 'Decoration',
          accessor: 'decorationValue',
        },
        {
          Header: 'Dimension',
          accessor: 'dimensionValue',
        },
        {
          Header: 'Textile Function',
          accessor: 'textileFunctionsValue',
        },
        {
          Header: 'Analysis Type',
          accessor: 'analysistype',
        },
        {
          Header: 'Date Analyzed ',
          accessor: 'analysisDate',
        },
      ],
    },
    {
      Header: 'Burial',
      columns: [
        {
          Header: 'Burial ID',
          accessor: 'burialMainId',
        },
        {
          Header: 'Depth',
          accessor: 'burialDepth',
        },
        {
          Header: 'Sex',
          accessor: 'burialSex',
        },
        {
          Header: 'Age at Death',
          accessor: 'burialAgeDeath',
        },
        {
          Header: 'Head Direction',
          accessor: 'burialHeadDirection',
        },
        {
          Header: 'Hair Color',
          accessor: 'burialHairColor',
        },
        {
          Header: 'Face Bundles',
          accessor: 'facebundles',
        },
      ],
    },
  ];

  //Plug in the headers here for dynamic Filtering
  const columns = useMemo(() => test, []);

  const [data, setData] = useState<Textile[]>([]);
  // Pull from database
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch(
        'https://localhost:4000/api/Fagelgamous/getAllTextiles',
      );
      let temp = await rsp.json();
      console.log(temp);
      temp.forEach((el) => {
        if (el.mainAnalyses.length > 0) {
          console.log(el.mainAnalyses);
          let tempElement = el.mainAnalyses[0];
          el.analysistype = tempElement.analysistype;
          el.analysisDate = tempElement.date;
        }
        if (el.mainColors.length > 0) {
          let tempElement = el.mainColors[0];
          el.colorValue = tempElement.value;
        }
        if (el.mainDecorations.length > 0) {
          let tempElement = el.mainDecorations[0];
          el.decorationValue = tempElement.value;
        }
        if (el.mainDimensions.length > 0) {
          let tempElement = el.mainDimensions[0];
          el.dimensiontype = tempElement.dimenstiontype;
          el.dimensionValue = tempElement.value;
        }
        if (el.mainStructures.length > 0) {
          let tempElement = el.mainStructures[0];
          el.structureValue = tempElement.value;
        }
        if (el.mainTextilefunctions.length > 0) {
          let tempElement = el.mainTextilefunctions[0];
          el.textileFunctionsValue = tempElement.value;
        }
        if (el.mainBurialmains.length > 0) {
          let tempElement = el.mainBurialmains[0];
          el.burialMainId = tempElement.burialid;
          el.burialDepth = tempElement.depth;
          el.burialSex = tempElement.sex;
          el.burialAgeDeath = tempElement.ageatdeath;
          el.burialHeadDirection = tempElement.headdirection;
          el.burialHairColor = tempElement.haircolor;
          el.facebundles = tempElement.facebundles;
        }
      });
      console.log(temp);

      setData(temp);
    };
    // Call the request
    fetchMovie();
  }, []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default TextilesDataTableFilter;
