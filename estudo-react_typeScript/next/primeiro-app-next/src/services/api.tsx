import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://wvsxlwngvsbzfosachht.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2c3hsd25ndnNiemZvc2FjaGh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDIwMzU2MiwiZXhwIjoyMDA5Nzc5NTYyfQ.bNwzCjOu8-l-W92_NpHwuMKSIW5DtBewC7GaQ6A22ms",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2c3hsd25ndnNiemZvc2FjaGh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDIwMzU2MiwiZXhwIjoyMDA5Nzc5NTYyfQ.bNwzCjOu8-l-W92_NpHwuMKSIW5DtBewC7GaQ6A22ms"
    }
})