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
    let exit = false;
    // returns main menu until user exits
    while (!exit) {
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
        
        case 'Delete Department':
            const { id } = await inquirer.prompt({
                type: 'input',
                name: 'id',
                message: 'What is the ID of the department you would like to delete?'
            });
            const deletedDepartment = await deleteDepartment(parseInt(id));
            console.log('Department deleted');
            break;

        case 'View All Roles':
            const roles = await viewAllRoles();
            console.table(roles);
            break;
        
        case 'Add Role':
            const { title, salary, department_id } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the role?'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary of the role?',
                    validate: value => !isNaN(value) ? true : 'Please enter a number'
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'What is the department ID of the role?',
                    validate: value => !isNaN(value) ? true : 'Please enter a number'
                }
            ]);
            const newRole = await addRole(title, parseFloat(salary), parseInt(department_id));
            console.log('Role added: ', newRole);
            break;
        
        case 'Delete Role':
            const { deleteRoleId } = await inquirer.prompt({
                type: 'input',
                name: 'deleteRoleId',
                message: 'Enter the ID of the role to delete:'
            });
            await deleteRole(parseInt(deleteRoleId));
            console.log('Role deleted');
            break;

        }

}
};
    mainMenu();