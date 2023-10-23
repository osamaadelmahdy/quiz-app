import React, { useState } from 'react';
import Quiz from './Quiz';
import QuizForm from './QuizForm';
import { v4 as uuidv4 } from 'uuid';
import { Button, Typography, Flex } from 'antd';
import QuizReview from './QuizReview';

const QuizList = ({ quizzes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [quizzesData, setQuizzesData] = useState(quizzes);
  const [quiz, setQuiz] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const addNewQuiz = data => {
    setQuizzesData([
      ...quizzesData,
      {
        title: data.title,
        description: data.description,
        id: uuidv4(),
        questions_answers: [],
        score: null,
        url: data.url,
      },
    ]);
    setIsModalOpen(false);
  };
  const handleOk = data => {
    if (isEditing) {
      const newQuizzesData = quizzesData.map(quiz => {
        if (data.id === quiz.id) {
          return {
            ...quiz,
            title: data.title,
            description: data.description,
            url: data.url,
          };
        }
        return quiz;
      });
      setQuizzesData(newQuizzesData);
    } else {
      addNewQuiz(data);
    }
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setQuiz({});
    setIsEditing(false);
  };
  const onSelectQuiz = quiz => {
    setQuiz(quiz);
    setIsEditing(true);
    setIsModalOpen(true);
  };
  const handleReview = quiz => {
    setIsReviewOpen(true);
    setQuiz(quiz);
  };

  return (
    <Flex gap="middle" vertical>
      <Typography.Title level={1}>Quiz List</Typography.Title>
      {quizzesData.map(quiz => (
        <Quiz
          quiz={quiz}
          onSelectQuiz={onSelectQuiz}
          handleReview={handleReview}
        />
      ))}
      <QuizReview
        quiz={quiz}
        isModalOpen={isReviewOpen}
        onCancel={() => {
          setIsReviewOpen(false);
          setQuiz({});
        }}
      />
      <QuizForm
        quiz={quiz}
        onSave={handleOk}
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
      />
      <Button type="primary" onClick={showModal}>
        Add New Quiz
      </Button>
    </Flex>
  );
};

export default QuizList;
