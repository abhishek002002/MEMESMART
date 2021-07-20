import React, { Fragment, useState } from "react";


const Editmeme = ({ meme }) => {
    const [meme_caption, setMemecaption] = useState(meme.meme_caption);
    const [meme_url, setMemeurl] = useState(meme.meme_url);
    const updateMeme = async e => {
        e.preventDefault();
        try {
            const body = { meme_caption: meme_caption, meme_url: meme_url };
            const response = await fetch(`http://localhost:5000/memes/${meme.meme_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning btn-lg"
                data-toggle="modal" 
                data-target={`#id${meme.meme_id}`}
            >
                <span className="glyphicon glyphicon-pencil"></span> Edit 
            </button>
            <div
                className="modal"
                open={true}
                id={`id${meme.meme_id}`}
                onClick={() => {
                    setMemecaption(meme.meme_caption);
                    setMemeurl(meme.meme_url)
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Meme</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => {
                                    setMemecaption(meme.meme_caption);
                                    setMemeurl(meme.meme_url)
                                }}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <h3 className="text-center">Hey!!  {meme.meme_author}</h3>
                            <h5 className="text-center">You can edit the caption and url of the meme from here!</h5>
                        <form className="mt-5 was-validated ">
                            <div className="form-group">
                                <label>New cption: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={meme_caption}
                                    onChange={e => setMemecaption(e.target.value)}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="form-group">
                                <label>New url: </label>
                                <input
                                    type="url"
                                    className="form-control"
                                    value={meme_url}
                                    onChange={e => setMemeurl(e.target.value)}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please provide a valid URL</div>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateMeme(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                    setMemecaption(meme.meme_caption);
                                    setMemeurl(meme.meme_url)
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Editmeme;