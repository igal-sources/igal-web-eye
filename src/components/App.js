import React from "react";
import axios from "axios";
import { Table, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const getJiraData = async () => {
  const response = await axios("http://localhost:4000/jira");
  console.log("JiraData: ", response.data.issues);
  return response;
};

const getJenkinsData = async () => {
  const response = await axios("http://localhost:4000/jenkins");
  console.log("JenkinsData: ", response);
  return response;
};

const getBitbucketData = async () => {
  const response = await axios("http://localhost:4000/bitbucket");
  console.log("BitbucketData: ", response.data.values);
  return response;
};

const App = () => {
  getJiraData();
  getJenkinsData();
  getBitbucketData();

  return (
    <div>
      <Icon loading name="spinner" />
      <Icon loading name="certificate" />
      <Icon loading name="asterisk" />
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="folder" /> node_modules
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              10 hours ago
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="folder" /> test
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="folder" /> build
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="file outline" /> package.json
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="file outline" /> Gruntfile.js
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default App;
