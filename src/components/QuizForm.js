import React, { useState, useEffect } from 'react';
import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const QuizForm = ({ quiz, onSave, isModalOpen, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
  });

  useEffect(() => {
    if (quiz) {
      setFormData(quiz);
    }
  }, [quiz]);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData); // Save or update the quiz
    setFormData({}); // Clear the form
  };

  return (
    <Modal
      title="Create/Edit Quiz"
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <Input
          type="text"
          name="title"
          value={formData.title || ''}
          onChange={handleInputChange}
          placeholder=" Title"
          required
        />

        <TextArea
          name="description"
          value={formData.description || ''}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <Input
          type="text"
          name="url"
          value={formData.url || ''}
          onChange={handleInputChange}
          placeholder="YouTube URL"
          required
        />
        <Button type="primary" htmlType="submit">
          Save Quiz
        </Button>
      </form>
    </Modal>
  );
};

export default QuizForm;
