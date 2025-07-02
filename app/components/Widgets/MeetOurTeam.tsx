"use client";

import { useEffect, useState } from "react";
import Card from "../Shared/Card";
import { client } from "../../../sanity/client";
import { TeamMember } from "../../../types/team";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                setLoading(true);
                const members = await client.fetch(`
                    *[_type == "member"] | order(_createdAt asc) {
                        _id,
                        name,
                        position,
                        image
                    }
                `);
                setTeamMembers(members);
            } catch (err) {
                console.error('Error fetching team members:', err);
                setError('Failed to load team members');
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

    if (error) {
        return (
            <section>
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-center mb-2">Meet Our Team</h1>
                        <p className="text-sm text-center text-red-600 max-w-[360px]">
                            {error}
                        </p>
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
                                <img 
                                    src={member.image} 
                                    alt={member.name}
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
                
                {teamMembers.length === 0 && (
                    <div className="text-center mt-10">
                        <p className="text-gray-600">No team members found. Add some members in your Sanity Studio!</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Team