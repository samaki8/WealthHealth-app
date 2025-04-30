// Mock data for employee table
export const mockEmployees = [
    {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1985-05-15",
        startDate: "2020-01-10",
        department: "Engineering",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "1990-08-22",
        startDate: "2019-03-15",
        department: "Marketing",
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001"
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        dateOfBirth: "1988-11-30",
        startDate: "2021-06-20",
        department: "Sales",
        street: "789 Pine St",
        city: "Chicago",
        state: "IL",
        zipCode: "60601"
    },
    {
        firstName: "Emily",
        lastName: "Williams",
        dateOfBirth: "1992-04-12",
        startDate: "2022-02-01",
        department: "HR",
        street: "321 Elm St",
        city: "Houston",
        state: "TX",
        zipCode: "77001"
    },
    {
        firstName: "David",
        lastName: "Brown",
        dateOfBirth: "1987-09-25",
        startDate: "2018-11-15",
        department: "Finance",
        street: "654 Maple Ave",
        city: "Phoenix",
        state: "AZ",
        zipCode: "85001"
    },
    {
        firstName: "Sarah",
        lastName: "Davis",
        dateOfBirth: "1993-07-18",
        startDate: "2021-09-05",
        department: "Engineering",
        street: "987 Cedar St",
        city: "Philadelphia",
        state: "PA",
        zipCode: "19101"
    },
    {
        firstName: "Robert",
        lastName: "Miller",
        dateOfBirth: "1986-12-05",
        startDate: "2019-08-12",
        department: "Marketing",
        street: "147 Birch Rd",
        city: "San Antonio",
        state: "TX",
        zipCode: "78201"
    },
    {
        firstName: "Jennifer",
        lastName: "Wilson",
        dateOfBirth: "1991-03-28",
        startDate: "2020-04-20",
        department: "Sales",
        street: "258 Willow Ln",
        city: "San Diego",
        state: "CA",
        zipCode: "92101"
    },
    {
        firstName: "William",
        lastName: "Moore",
        dateOfBirth: "1989-06-14",
        startDate: "2018-05-30",
        department: "HR",
        street: "369 Spruce Dr",
        city: "Dallas",
        state: "TX",
        zipCode: "75201"
    },
    {
        firstName: "Jessica",
        lastName: "Taylor",
        dateOfBirth: "1994-01-20",
        startDate: "2022-01-10",
        department: "Finance",
        street: "741 Oakwood Ave",
        city: "San Jose",
        state: "CA",
        zipCode: "95101"
    }
];

// Function to generate more mock data
export const generateMockData = (count) => {
    const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance", "IT", "Operations", "Customer Service"];
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    const mockData = [...mockEmployees];

    for (let i = mockData.length; i < count; i++) {
        const firstName = `Employee${i + 1}`;
        const lastName = `Last${i + 1}`;
        const year = Math.floor(Math.random() * 20) + 1980;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        const dateOfBirth = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        const startYear = Math.floor(Math.random() * 5) + 2018;
        const startMonth = Math.floor(Math.random() * 12) + 1;
        const startDay = Math.floor(Math.random() * 28) + 1;
        const startDate = `${startYear}-${startMonth.toString().padStart(2, '0')}-${startDay.toString().padStart(2, '0')}`;

        const department = departments[Math.floor(Math.random() * departments.length)];
        const state = states[Math.floor(Math.random() * states.length)];
        const city = `City${i + 1}`;
        const street = `${i + 1} Main St`;
        const zipCode = `${Math.floor(Math.random() * 90000) + 10000}`;

        mockData.push({
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            department,
            street,
            city,
            state,
            zipCode
        });
    }

    return mockData;
}; 