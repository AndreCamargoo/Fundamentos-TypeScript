import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
    
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "André Camargo",
        duration: 10
    })

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Andrezza Mendes",
        duration: 10
    })

    return response.send()
}