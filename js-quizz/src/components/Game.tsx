import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import { Question as QuestionType } from "../types.d";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  if (userSelectedAnswer === undefined) return "transparent";

  if (index === correctAnswer) return "green";

  if (index === userSelectedAnswer && userSelectedAnswer !== correctAnswer)
    return "red";

  return "transparent";
};

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ bgcolor: "#222", p: 2, textAlign: "left", marginTop: 4 }}
      >
        <Typography variant="h5">{info.question}</Typography>
        <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
          {info.code}
        </SyntaxHighlighter>

        <List sx={{ bgcolor: "#333" }} disablePadding>
          {info.answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton
                disabled={info.userSelectedAnswer !== undefined}
                onClick={createHandleClick(index)}
                sx={{ bgcolor: getBackgroundColor(info, index) }}
              >
                <ListItemText primary={answer} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
}
