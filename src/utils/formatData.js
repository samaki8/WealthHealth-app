// utils/formatData.js
import dayjs from 'dayjs';

export const formatEmployeeData = (data) => ({
    ...data,
    dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth).format('YYYY-MM-DD') : null,
    startDate: data.startDate ? dayjs(data.startDate).format('YYYY-MM-DD') : null,
});
