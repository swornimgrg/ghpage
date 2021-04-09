import React from "react";
import { Container, Header, Icon, Table } from "semantic-ui-react";

export default function ContactUs() {
  return (
    <Container>
      <Header as="h3" style={{ marginTop: "2em" }}>
        Contact Us
      </Header>
      <iframe
        style={{ marginBottom: "2em", border: "1px" }}
        title="Aarya Electricals Location"
        width="100%"
        height="500px"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2wRBE2OVlTkRIH0wIAVwzsM&key=AIzaSyBiY-G_tz_3dOVZpFQd9_0JqPYi74UfFe0"
      ></iframe>

      <Table singleLine style={{ marginBottom: "2em" }}>
        <Table.Header />
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Icon name="map marker alternate" />
                <Header.Content>Address</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>Nayabazar, Pokhara, Gandaki, Nepal</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Icon name="phone" />
                <Header.Content>Contact Number</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>+977 98065 96443</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Icon name="mail" />
                <Header.Content>Email</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>ujwal@aaryaelectricals.com.np</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Icon name="time" />
                <Header.Content>Working Hours</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>Everyday 8 am to 8 pm</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}
