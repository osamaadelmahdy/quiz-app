import { Button, Card, Flex, Typography } from 'antd';
import React from 'react';

function Quiz({ quiz, onSelectQuiz, handleReview }) {
  const { Text, Link } = Typography;
  return (
    <Card key={quiz.id}>
      <Flex vertical gap={10}>
        <Text strong>Title: {quiz.title}</Text>
        <Text strong>Description: {quiz.description}</Text>
        <Text strong>Final Score: {quiz.score}</Text>
        <Text strong>
          YouTube Video URL:{' '}
          <Link href={quiz.url} target="_blank">
            Link
          </Link>
        </Text>
        <Button onClick={() => onSelectQuiz(quiz)}>Edit</Button>
        <Button onClick={() => handleReview(quiz)}>Show</Button>
      </Flex>
    </Card>
  );
}

export default Quiz;
