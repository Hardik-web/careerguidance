import React from 'react'


function Science() {
    return (
        <div className="page-container">
            <br />
            <h4>There is a multitude of career options available after pursuing Science stream in Class 11-12, however, the subjects are also considerably difficult and will require effort. Thus, you should go for this stream only if you are absolutely sure about your interest and aptitude for the subjects. You should also have some clarity about which career options you are targeting after class 12.</h4><br /><br />
            <p>
                <a class="btn1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Career and Subjects</a>
                <a class="btn1" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                    After 12th</a>
            </p>

            <div class="collapse" id="collapseExample">
                <div class="cardd card-body">
                    <strong>Further studies after 10th:</strong><br />
                    i. 11th and 12th<br />ii. Diploma<br />
                    <strong> Subjects for Students after 10th</strong><br />
                    i. Physics<br />ii. Chemistry<br />iii. Mathematics<br />iv. Biology<br />v. English<br /><br /><strong>Optional Subjects</strong> <br />i. Computer Science<br />ii. Information Technology<br />iii. Pyschology
                </div>
            </div>
            <div class="collapse" id="collapseExample1">
                <div class="cardd card-body">
                    <strong>Career after 12th:</strong><br />
                    
                    i. Engineering (B.E/B.Tech)<br />ii. Medical (MBBS)<br />iii. National Defence Academy (NDA)<br />iv. Aviation<br />v. Architect<br /><br />
                    <strong>Students can opt for:</strong><br />
                    i. Masters<br />
                    ii. MBA<br />
                    iii. Start Up<br />
                    iv. Job<br />
                    v. PhD<br />
                    vi. Research and Development
                </div>
            </div>
        </div>
    )
}
export default Science