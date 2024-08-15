import inquirer from 'inquirer';
import EmployeeTracker from './queries';

async function mainMenu() {
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

  