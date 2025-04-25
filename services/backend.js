const BASE_URL = "https://j2igehf7vgl4rinc2jl73leuc40nfxlv.lambda-url.us-east-1.on.aws";

export async function callBackendAPI(method, endpoint, data) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error in API call:", error);
        throw error;
    }
}
