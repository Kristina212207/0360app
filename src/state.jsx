const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@ya.ru",
  id: 1,
  about:
    "Учитывая ключевые сценарии поведения, перспективное планирование напрямую зависит от поставленных обществом задач! Но предприниматели в сети интернет и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=200&q=80",
};

const users = {
  0: { name: "Кристина", lastname: "Иванова" },
  1: { name: "Ксения", lastname: "Чижикова" },
  2: { name: "Диана", lastname: "Петрова" },
  3: { name: "Сергей", lastname: "Петров" },
  4: { name: "Александр", lastname: "Солнцев" },
};

export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
