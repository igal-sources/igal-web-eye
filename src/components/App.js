import React from "react";
import axios from "axios";
import { Table, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { getGithubData } from "../apis/github";
import { getJiraUserAssigneeIssues } from "../apis/jira";
import { getJenkinsData } from "../apis/jenkins";

const App = () => {
  getJiraUserAssigneeIssues(response => {
    console.log("JiraData: ", response);
  });

  getGithubData(response => {
    console.log("GithubData: ", response);
  });

  getJenkinsData(response => {
    console.log("JenkinsData: ", response);
  });

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
