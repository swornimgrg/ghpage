import React from "react";
import { Button, Container, Grid, Header, Icon, List, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment color="blue" inverted vertical style={{ padding: "5em 0em", width: "100%" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Contact Us" />
              <List inverted>
                <List.Item>
                  <Icon name="map marker alternate" /> Nayabazar, Pokhara
                </List.Item>
                <List.Item>
                  <Icon name="call" /> +977 98065 96443
                </List.Item>
                <List.Item>
                  <Icon name="  mail" />
                  ujwal@aaryaelectricals.com
                </List.Item>
              </List>
              <div>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="google plus" icon="instagram" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
