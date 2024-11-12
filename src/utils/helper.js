
// Function to format dates
export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};

// Function to filter tasks by status
export const filterTasksByStatus = (tasks, status) =>
    tasks.filter((task) => task.status === status);
