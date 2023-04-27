const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
    </tr>
  );
};

export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let userRow = [];
  let usersCount = Object.keys(users).length;
  for (let i = 0; i < usersCount; i++) {
    userRow.push(
      <TableRow
        index={i}
        key={i}
        name={users[i].name}
        lastname={users[i].lastname}
      />
    );
  }
  return (
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
            </tr>
          </thead>
          <tbody>{userRow}</tbody>
        </table>
      </div>
    </div>
  );
};