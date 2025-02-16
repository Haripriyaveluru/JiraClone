import { getOrganizations } from '@/actions/organization';
import React from 'react'
import OrgSwitcher from '@/components/org-switcher';
import ProjectList from './_components/project-list';
import UserIssues from './_components/user-issues';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Organization = async ({ params }) => {
    const { orgId } = await params;
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const organization = await getOrganizations(orgId);

    if (!organization) {
        return (
            <div>
                Organization not found
            </div>
        )
    }
    return (
        <div className='container mx-auto'>
            <div className='mb-4 flex flex-col sm:flex-row justify-between items-start'>
                <h1 className='text-5xl font-bold gradient-title pb-2'>{organization.name}&rsquo;s project</h1>
                {/* org switcher */}
                <OrgSwitcher />
            </div>
            <div className="mb-4">
                <ProjectList orgId={organization.id} />
            </div>
            <div className="mt-8">
                <UserIssues userId={userId} />
            </div>
        </div>
    )
}

export default Organization
