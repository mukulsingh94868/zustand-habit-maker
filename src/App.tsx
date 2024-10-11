import { Container, Typography, Box } from "@mui/material";
import './App.css';
import AddHabitForm from './components/AddHabitForm';
import HabitList from "./components/habitList";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        {/* <HabitList /> */}
      </Box>
    </Container>
  )
}

export default App;
