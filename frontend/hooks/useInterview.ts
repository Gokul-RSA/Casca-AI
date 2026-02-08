import { useState } from 'react';

export const useInterview = (sessionId: string | undefined) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const startSession = async () => {
        setIsLoading(true);
        try {
            // Start session logic
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        startSession
    };
};
