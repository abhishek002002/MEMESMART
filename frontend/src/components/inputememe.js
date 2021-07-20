import React, { Fragment, useState } from 'react'

export default function Inputmeme() {
  const [meme_author, setMemeauthor] = useState("Abhishek");
  const [meme_caption, setMemecaption] = useState("Be creative with caption!!");
  const [meme_url, setMemeurl] = useState("https:/......");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { meme_author: meme_author, meme_caption: meme_caption, meme_url: meme_url };
      const response = await fetch("http://localhost:5000/memes", {
        method: "POST",
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
      <div>
      <h1 className="text-center mt-5" action="/action_page.php" >XMEME</h1>
      <div >
      <button type="button" className="btn btn-danger" style={{padding:'2px 2px 2px 2px'},{marginLeft:'20px'}} data-toggle="modal" data-target="#exampleModal">
        Wanna post something....
      </button>
      </div>
      {/* //modal; */}
      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">Post your meme and Enjoy :)</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="mt-5 was-validated ">
                <div className="form-group">
                  <label>Author: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={meme_author}
                    onChange={e => setMemeauthor(e.target.value)}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <label>Caption: </label>
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
                  <label>Meme URL: </label>
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
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={onSubmitForm} className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      </div>

    </Fragment>
  );
}
