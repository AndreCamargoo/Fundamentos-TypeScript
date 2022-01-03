"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name - string
 * duration - number
 * educator - string
 */
class CreateCourseService {
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService;
