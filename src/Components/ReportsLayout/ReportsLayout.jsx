
import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  return (
    <div className="reports-page">
      <div className="reports-card">

        <div className="reports-header">
          <h1>Your Reports</h1>
          <p>View your medical reports and appointment records.</p>
        </div>

        <div className="reports-table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Report</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {/* Medical Consultation */}
              <tr>
                <td>Medical Consultation</td>
                <td>15 Aug 2026</td>
                <td>Dr. Ahmed</td>
                <td>
                  <span className="report-status">
                    Available
                  </span>
                </td>
                <td>
                  <a
                    href="/patient_report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="report-view-btn"
                  >
                    View
                  </a>

                  <a
                    href="/patient_report.pdf"
                    download="patient_report.pdf"
                    className="report-download-btn"
                  >
                    Download
                  </a>
                </td>
              </tr>

              {/* General Checkup */}
              <tr>
                <td>General Checkup</td>
                <td>10 Aug 2026</td>
                <td>Dr. Sarah</td>
                <td>
                  <span className="report-status">
                    Available
                  </span>
                </td>
                <td>
                  <a
                    href="/patient_report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="report-view-btn"
                  >
                    View
                  </a>

                  <a
                    href="/patient_report.pdf"
                    download="patient_report.pdf"
                    className="report-download-btn"
                  >
                    Download
                  </a>
                </td>
              </tr>

              {/* Blood Test Report */}
              <tr>
                <td>Blood Test Report</td>
                <td>05 Aug 2026</td>
                <td>Dr. Ali</td>
                <td>
                  <span className="report-status">
                    Available
                  </span>
                </td>
                <td>
                  <a
                    href="/patient_report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="report-view-btn"
                  >
                    View
                  </a>

                  <a
                    href="/patient_report.pdf"
                    download="patient_report.pdf"
                    className="report-download-btn"
                  >
                    Download
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ReportsLayout;
