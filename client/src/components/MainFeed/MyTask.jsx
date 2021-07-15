import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  Card,
  Row,
  CardContent,
  Username,
  Description,
  DetailsCol,
  Details,
  StatusBadge,
} from './styles-MainFeed';

StatusBadge.defaultProps = {
  theme: {
    statusColor: '#f50257',
  },
};

const MyTask = ({ task, formatDate }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [day, setDay] = useState(0);
  const [time, setTime] = useState();

  // ************************************************************* //

  // STATUS TRANSLATION //

  /* Status's here are being translated for the current users perspective.
  A request status that is 'open' will appear as "Unclaimed".
  Once a helper claims the requesters task, the task status converts to 'Pending' which
  will appear as "Claimed" to the requester.
  */

  const [status, setStatus] = useState(0);
  const translateStatus = () => {
    if (task.status === 'Open') { return 'Unclaimed'; }
    return task.status;
  };

  // ************************************************************* //

  // COLOR THEMING FOR STATUS BADGE //

  const [color, setColor] = useState('#f50257');
  const theme = {
    statusColor: color,
  };

  const getColor = () => {
    if (status === 'Unclaimed') { setColor('#ed8e99'); }
    if (status === 'Pending') { setColor('#ed8e99'); }
    if (status === 'Active') { setColor('#1A97DD'); }
    if (status === 'Closed') { setColor('#F3960A'); }
    if (status === 'Completed') { setColor('#666666'); }
  };

  // ************************************************************* //

  useEffect(() => {
    setStatus(translateStatus());
    getColor();
    setDay(formatDate(task.start_date, task.start_time).start_date);
    setTime(formatDate(task.start_date, task.start_time).time);
  });

  const selectTaskHandler = () => {
    if (task.status === 'Active') {
      history.push('/active');
    }
    dispatch({
      type: 'SET_TASK', task,
    });
  };

  return (
    <Card onClick={selectTaskHandler}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Row>
          <Avatar src={task.requester.profile_picture_url} alt="profilePHoto" />
          <CardContent>
            <Username>{`${task.requester.firstname} ${task.requester.lastname}`}</Username>
            <Description>{`${task.description.substring(0, 60)}...`}</Description>
          </CardContent>
        </Row>
        <DetailsCol>
          <ThemeProvider theme={theme}>
            <StatusBadge>{status}</StatusBadge>
          </ThemeProvider>
          <Details>{day}</Details>
          <Details>{time}</Details>
        </DetailsCol>
      </Row>
    </Card>
  );
};

MyTask.propTypes = {
  task: PropTypes.shape({
    requester: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      profile_picture_url: PropTypes.string.isRequired,
    }),
    task_id: PropTypes.number,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number,
    start_date: PropTypes.string,
    start_time: PropTypes.string,
    car_required: PropTypes.bool,
    status: PropTypes.oneOf(['Open', 'Pending', 'Active', 'Complete', 'Closed']),
  }).isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default MyTask;
