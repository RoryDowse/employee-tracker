"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const queries_1 = require("./queries");
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    let exit = false;
    // returns main menu until user exits
    while (!exit) {
        const { choice } = yield inquirer_1.default.prompt({
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
                const departments = yield (0, queries_1.viewAllDepartments)();
                console.table(departments);
                break;
            case 'Add Department':
                const { departmentName } = yield inquirer_1.default.prompt({
                    type: 'input',
                    name: 'departmentName',
                    message: 'What is the name of the department?'
                });
                const newDepartment = yield (0, queries_1.addDepartment)(departmentName);
                console.log('Department added: ', newDepartment);
                break;
            case 'Delete Department':
                const { id } = yield inquirer_1.default.prompt({
                    type: 'input',
                    name: 'id',
                    message: 'What is the ID of the department you would like to delete?'
                });
                const deletedDepartment = yield (0, queries_1.deleteDepartment)(parseInt(id));
                console.log('Department deleted');
                break;
            case 'View All Roles':
                const roles = yield (0, queries_1.viewAllRoles)();
                console.table(roles);
                break;
            case 'Add Role':
                const { title, salary, department_id } = yield inquirer_1.default.prompt([
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
                const newRole = yield (0, queries_1.addRole)(title, parseFloat(salary), parseInt(department_id));
                console.log('Role added: ', newRole);
                break;
            case 'Delete Role':
                const { deleteRoleId } = yield inquirer_1.default.prompt({
                    type: 'input',
                    name: 'deleteRoleId',
                    message: 'Enter the ID of the role to delete:'
                });
                yield (0, queries_1.deleteRole)(parseInt(deleteRoleId));
                console.log('Role deleted');
                break;
        }
    }
});
mainMenu();
