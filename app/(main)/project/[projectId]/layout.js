import React, { Suspense } from 'react'

const ProjectLayout = async ({ children }) => {
    return (
        <div className="mx-auto">
            <Suspense fallback={<span>Loading Projects..</span>}>
                {children}
            </Suspense>

        </div>
    )
}

export default ProjectLayout
