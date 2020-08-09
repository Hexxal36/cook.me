import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Textarea extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Editor
                    initialValue={`<p>${this.props.value}</p>`}
                    init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Textarea;