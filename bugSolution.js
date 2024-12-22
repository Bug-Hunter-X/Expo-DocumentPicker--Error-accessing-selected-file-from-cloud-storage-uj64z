The solution is to handle the URI returned by DocumentPicker appropriately, depending on the file's location.  Instead of attempting to read the file locally, display or handle the URI.

```javascript
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.cancelled) {
      setSelectedFile(result);
    }
  };

  return (
    <View>
      <Button title="Select File" onPress={pickDocument} />
      {selectedFile && (
        <Text>Selected File URI: {selectedFile.uri}</Text>
      )}
    </View>
  );
}
```
This revised code displays the URI of the selected file instead of trying to access it directly.  To access content from cloud storage, you would integrate with the cloud storage service's API.