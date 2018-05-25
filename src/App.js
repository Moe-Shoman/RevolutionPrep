import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Course from './components/Course/Course';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      exams: [],
      classes: [],
    };
  }

  componentDidMount() {
    this.getCourses();
  }

  getCourses() {
    axios.get('http://www.mocky.io/v2/5af340293400004f00770458')
      .then(({ data: { courses } }) => {
        courses.sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
        const exams =  courses.filter((course) => course.type === 'Practice Exam');
        const classes = courses.filter((course) => course.type === 'Class');

        this.setState({
          courses,
          exams,
          classes,
        });
      });
  }

  render() {
    const { exams, classes } = this.state;
    return (
      <div className="App">
        <Course {...exams[0]} />
        <Course {...classes[0]} />
        <Course {...exams[1]} />
        <Course {...classes[1]} />
      </div>
    );
  }
}

export default App;
