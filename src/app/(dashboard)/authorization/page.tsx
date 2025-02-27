import { AuthWrapper } from "@/components/auth";

export default function Authorization() {
    return (
        <AuthWrapper requiredRole="admin">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Authorization</h1>
                <p>Authorization feature coming soon...</p>
            </div>
        </AuthWrapper>
    )
}