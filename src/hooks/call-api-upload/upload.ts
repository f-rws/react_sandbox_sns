import { useCallApi } from "@/hooks/callApi.ts";
import { uploadRepository } from "@/repositories/upload/repository.ts";

export const useUpload = () => {
    const { exec, loading, error } = useCallApi<null>();

    const execUpload = (data: File) => {
        const formData = new FormData();

        const fileName = Date.now() + data.name;
        formData.append("name", fileName);
        formData.append("file", data);
        return exec(uploadRepository.upload(formData));
    };

    return {
        loading,
        error,
        execUpload,
    };
};
