import { useState } from "react";
import { AxiosError, isAxiosError } from "axios";

export const useCallApi = <ResponseDataType>() => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ResponseDataType | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);

    const exec = async (promise: Promise<ResponseDataType>) => {
        setLoading(true);
        setError(null);

        try {
            const data = await promise;

            setData(data);
            return data;
        } catch (e) {
            if (isAxiosError(e)) {
                setError(e as AxiosError);
            }
        } finally {
            setLoading(false);
        }
    };
    return {
        loading,
        data,
        error,
        exec,
    };
};
