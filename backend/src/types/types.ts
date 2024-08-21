export interface signupData {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface blogData {
    title: string,
    description: string,
}

export interface updateBlogData {
    title?: string,
    description?: string
}