function MyFunctionComponent(props){
  return(
      <div style={{width:'fit-content',margin:'auto'}}>
          <h1>Student Details using Function Component</h1>
          <table className="table-striped table table-striped table-hover table-bordered">
              <thead>
                  <tr>
                      <th>Roll No</th>
                      <th>Name</th>
                      <th>Group</th>
                      <th>Number</th>
                  </tr>
              </thead>
              <tbody className="table-group-divider">
              <tr> <td>2211CS010347</td>    <td>M.bhavana</td> <td>G8A-11</td> <td>1431522204</td> </tr>
              <tr> <td>2211CS010540</td>    <td>S.Pranitha</td> <td>G8A-12</td> <td>666912482</td></tr>
              <tr> <td>2211CS010358</td>    <td>M.arshitha</td> <td>G8A-13</td> <td>3456789247</td> </tr>
              </tbody>
          </table>
      </div>
  );
}
export default MyFunctionComponent;