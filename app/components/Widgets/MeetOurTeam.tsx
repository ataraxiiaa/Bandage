"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../Shared/Card";
import { client } from "../../../sanity/lib/client";
import { TeamMember } from "../../../types/team";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                setLoading(true);
                setError(null);
                
                console.log('Environment variables:', {
                    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
                });
                
                console.log('Testing Sanity connection...');
                const testQuery = await client.fetch('*[_type == "member"][0..2]');
                console.log('Test query result:', testQuery);

                const members = await client.fetch(`
                    *[_type == "member"] | order(_createdAt asc) {
                        _id,
                        name,
                        position,
                        image
                    }
                `);
                
                console.log('Fetched members:', members);
                setTeamMembers(members || []);
            } catch (err) {
                console.error('Error fetching team members:', err);
                const errorMessage = err instanceof Error ? err.message : 'Failed to load team members';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    
    if (loading) {
        return (
            <section>
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-center mb-2">Meet Our Team</h1>
                        <p className="text-sm text-center text-gray-700 max-w-[360px]">
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-center mb-2">Meet Our Team</h1>
                    <p className="text-sm text-center text-gray-700 max-w-[360px]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
                    {teamMembers.map((member) => (
                        <Card key={member._id}>
                            <div className="w-70 h-70 overflow-hidden flex items-center justify-center bg-gray-100 rounded-t-lg">
                                <Image 
                                    src={member.image} 
                                    alt={member.name}
                                    width={280}
                                    height={280}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-center">{member.name}</h2>
                                <p className="text-sm text-center text-gray-600">{member.position}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                
                {teamMembers.length === 0 && !loading && !error && (
                    <div className="text-center mt-10">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                            <p className="text-gray-600 mb-2">No team members found.</p>
                            <p className="text-sm text-gray-500">
                                Add some members in your Sanity Studio at:{" "}
                                <code className="bg-gray-100 px-1 rounded text-xs">
                                    /studio
                                </code>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Team