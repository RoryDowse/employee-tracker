import inquirer from 'inquirer';
import { 
    viewAllDepartments, 
    addDepartment, 
    deleteDepartment, 
    viewAllRoles, 
    addRole, 
    deleteRole, 
    viewAllEmployees, 
    addEmployee, 
    updateEmployeeRole, 
    updateEmployeeManager, 
    viewAllEmployeesByManager, 
    viewEmployeesByDepartment, 
    deleteEmployee, 
    viewCombinedSalaries 
} from './queries';

const mainMenu = async () => {
    const { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'Add Department',
            'Delete Department',
            'View All Roles',
            'Add Role',
            'Delete Role',
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'View All Employees By Manager',
            'View Employees By Department',
            'Delete Employee',
            'View Combined Salaries',
            'Exit'
        ]
    });

    switch (choice) {
        case 'View All Departments':
            const departments = await viewAllDepartments();
            console.table(departments);
            break;

        case 'Add Department':
            const { departmentName } = await inquirer.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            });
            const newDepartment = await addDepartment(departmentName);
            console.log('Department added: ', newDepartment);
            break;
    }
};
    mainMenu();