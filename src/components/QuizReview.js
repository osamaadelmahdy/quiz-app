import React, { useState, useEffect } from 'react';
import Questions from './Questions';
import { Button, Modal, Typography, Flex } from 'antd';

const QuizReview = ({ quiz, isModalOpen, onCancel }) => {
  const { Link, Title } = Typography;

  return (
    <Modal
      title="Quiz Information"
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
    >
      <Flex vertical>
        <Title level={4}> Title: {quiz.title}</Title>
        <Title level={4}>Description: {quiz.description}</Title>

        <Title level={4}>
          URL:{' '}
          <Link href={quiz.url} target="_blank">
            {quiz.url}
          </Link>{' '}
        </Title>

        <Title level={4}>Score: {quiz.score}</Title>
        <Questions questionsAnswers={quiz.questions_answers} />
        <Button type="primary" onClick={onCancel}>
          ok
        </Button>
      </Flex>
    </Modal>
  );
};

export default QuizReview;
