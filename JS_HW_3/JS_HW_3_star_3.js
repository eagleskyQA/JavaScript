const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]


const separator = (taskNumber) => {                                                   // Функция разделения заданий, 
  console.log(`\n\n------------------ Задание ${taskNumber} ------------------\n`);   // для лучшей читалебльности в консоли. 
};                                                                                    // В качестве аргумента принимает номер задания.


// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)


separator(1);    // Функция-разделитель заданий


const number_of_employees = (list) => {
  list.forEach(el => {
    let count = 0;

    el.departments.forEach(deptEmployees => {
      count += deptEmployees.employees_count;
    });

    if (count === '' || count === 0) {
      console.log(`${el.name} (нет сотрудников)`);
    } else {
      console.log(`${el.name} (${count} сотрудников)`);
    };

    el.departments.forEach(dept => {
      if (dept.employees_count === '' || dept.employees_count === 0) {
        console.log(`- ${dept.name} (нет сотрудников)`);
      } else {
        console.log(`- ${dept.name} (${dept.employees_count} сотрудников)`);
      };
    });
  });
};

number_of_employees(enterprises);


separator(2);    // Функция-разделитель заданий


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела) и возвращать название предприятия, к которому относится.

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const searchEnterpriseForIdOrName = (nameId) => {

  enterprises.filter(el => {
    if (nameId === el.id || nameId === el.name) {
      console.log(`Вы нашли "${el.name}", а не конкретный отдел`);
    };

    el.departments.filter(dept => {
      if (nameId === dept.id || nameId === dept.name) {
        console.log(`Отдел который вы ищете находится в "${el.name}"`);
      };
    });
  });
};

searchEnterpriseForIdOrName(1);                        // В данном задании мы запрашиваем функцию 4 раза, но выводов будет 5;
searchEnterpriseForIdOrName(6);                        // т.к. "Отдел маркетинга" существует в "Предприятие 1" и "Предприятие 2"
searchEnterpriseForIdOrName("Отдел маркетинга");
searchEnterpriseForIdOrName("Предприятие 3");


separator(3);    // Функция-разделитель заданий


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

let assignId = () => {                                  // Функция, присваивающая ID новому предприятию
  idArray = [];

  enterprises.forEach(ent => {
    idArray.push(ent.id);

    ent.departments.forEach(dept => {
      idArray.push(dept.id);
    });
  });
  maxId = Math.max.apply(null, idArray) + 1;
  return maxId;
};


const addEnterprise = (nameEnterpise) => {              // Функция, создающая само предприятие по готовому шаблону
  let modelEnterprise = {
    id: assignId(),
    name: nameEnterpise,
    departments: []
  }

  enterprises.push(modelEnterprise);
}

addEnterprise('Предприятие "Alpha"');
addEnterprise('Предприятие "Beta"');
console.log(enterprises);

separator(4);    // Функция-разделитель заданий


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

const addDepartment = (idEnt, nameNewDep) => {
  let modelDepartment = {
    id: assignId(),
    name: nameNewDep,
    employees_count: 0,
  };

  enterprises.forEach(ent => {
    if (ent.id === idEnt) {
      ent.departments.push(modelDepartment);
    };
  });
};

addDepartment(11, 'Отдел подвозва печенек');
addDepartment(11, 'Отдел подвоза кофе');
addDepartment(12, 'Отдел моральной релаксации');
addDepartment(12, 'Отдел выдачи денюжек');
console.log(enterprises);

separator(5);    // Функция-разделитель заданий


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = (idEnt, newNameEnt) => {
  enterprises.forEach(ent => {
    if (ent.id === idEnt) {
      ent.name = newNameEnt;
    };
  });
};

editEnterprise(11, 'Предприятие смелых Котиков');
editEnterprise(12, 'Предприятие бравых Пёселей');
console.log(enterprises);

separator(6);    // Функция-разделитель заданий


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)