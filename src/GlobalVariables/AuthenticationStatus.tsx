export var Authentication_Status = 0;
export var CurrentUser = 'Bob';

export function Logout() {
  Authentication_Status = 0;
  CurrentUser = '';
}
