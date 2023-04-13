import React from 'react';


function TextileForm() {
    return (
        
        <div>
            <h1>Add Textile</h1>
            <form method='post'>
                <div className="container">
                    <div className='row '>
                        <div>
                            <input type='hidden' name='id' value='0'></input>
                        </div>
                        <div className ="form-group col card p-3 bg-light">
                            <label >Locale</label>
                            <input type="string" className="form-control" name="locale" placeholder="Locale"/>
                        </div>

                        <div className="form-group col card p-3 bg-light">
                            <label>Description</label>
                            <input type="string" className="form-control" name="description" placeholder="Description"/>
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col card p-3 bg-light">
                            <label>Burial Number</label>
                            <input type="string" className="form-control" name="burialnumber" placeholder="Burial Number"/>
                        </div>
                        <div className="form-group col card p-3 bg-light">
                            <label>Estimated Period</label>
                            <input type="string" className="form-control" name="estimatedperiod" placeholder="estimatedperiod"/>
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col card p-3 bg-light">
                            <label>Sample Date</label>
                            <input type="string" className="form-control" name="sampledate" placeholder="Sample Date"/>
                        </div>      
        
                        <div className="form-group col card p-3 bg-light">
                            <label>Direction</label>
                            <input type="string" className="form-control" name="direction" placeholder="Direction"/>
                        </div> 
                        <div>
                            <input type='hidden' name='photographeddate' value=''></input>
                        </div>     
                        <div>
                            <input type='hidden' name='textileid' value=''></input>
                        </div>   
                        {/* <div className="form-group col card p-3 bg-light">
                            <label>Analyses</label>
                            <input type="string" className="form-control" name="mainAnalyses" placeholder="Analyses"/>
                        </div>    

                        <div className="form-group col card p-3 bg-light">
                            <label>Colors</label>
                            <input type="string" className="form-control" name="mainColors" placeholder="Colors"/>
                        </div>  
                        <div className="w-100"></div>          
                        <div className="form-group col card p-3 bg-light">
                            <label>preservation</label>
                            <input type="string" className="form-control" name="preservation" placeholder="preservation"/>
                        </div>            
                        <div className="form-group col card p-3 bg-light">
                            <label>Decorations</label>
                            <input type="string" className="form-control" name="mainDecorations" placeholder="Decorations"/>
                        </div>    
                        <div className="w-100"></div>        
                        <div className="form-group col card p-3 bg-light">
                            <label>Dimensions</label>
                            <input type="string" className="form-control" name="mainDimensions" placeholder="Dimensions"/>
                        </div>            
                        <div className="form-group col card p-3 bg-light">
                            <label>Structure</label>
                            <input type="string" className="form-control" name="mainStructures" placeholder="Structure"/>
                        </div>            
                        <div className="w-100"></div>
                        <div className="form-group col card p-3 bg-light">
                            <label>Textilefunctions</label>
                            <input type="string" className="form-control" name="mainTextilefunctions" placeholder="Textilefunctions"/>
                        </div>        
    
                        <div className="form-group col card p-3 bg-light">
                            <label>Yarnmanipulations</label>
                            <input type="string" className="form-control" name="mainYarnmanipulations" placeholder="Yarnmanipulations"/>
                        </div> */}

                        
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default TextileForm