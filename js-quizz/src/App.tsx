import { Container, Typography, Stack } from "@mui/material";
import "./App.css";
import { JavaScriptLogo } from "./components/JavaScriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./components/Game";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length > 0 ? <Game /> : <Start />}
      </Container>
    </main>
  );
}

export default App;
