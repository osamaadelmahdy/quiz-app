import React from 'react';
import Answers from './Answers';
import { Flex, Typography } from 'antd';

function Questions({ questionsAnswers }) {
  const { Text, Title } = Typography;
  if (questionsAnswers.length > 0) {
    return (
      <>
        <Title level={4} strong>
          Questions:
        </Title>
        {questionsAnswers.map((question, index) => {
          return (
            <>
              <Flex vertical key={question.id}>
                <Flex>
                  <Text strong> Question {index + 1}: </Text>
                  <Text>{question.text}</Text>
                </Flex>

                <Answers answers={question?.answers} index={index} />
              </Flex>
            </>
          );
        })}
      </>
    );
  } else {
    return null;
  }
}

export default Questions;
