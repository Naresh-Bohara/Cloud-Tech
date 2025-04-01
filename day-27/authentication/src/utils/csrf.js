export const getCsrfToken = async () => {
    const response = await fetch("http://localhost:8080/csrf-token", {
        credentials: "include",  // Ensures cookies are included in the request
    });
    const data = await response.json();  // Parse the response
    return data.csrfToken;  // Return the CSRF token
};
