import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    margin: 10,
  },
  customSection: {
    fontFamily: "Birthstone",
    fontSize: 28,
  },
  customSection2: {
    fontFamily: "Work Sans",
    fontSize: 20,
  },
});

const Sample = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>This is a regular default font</Text>
      </View>
      <View style={styles.customSection}>
        <Text>This is a custom font that works</Text>
      </View>
      <View style={styles.customSection2}>
        <Text>This is another custom font that works</Text>
      </View>
      <View style={styles.customSection2}>
        <Text>Some words don't work: Verification, 1215 Meyrin Genève</Text>
      </View>
    </Page>
  </Document>
);

export default Sample;
