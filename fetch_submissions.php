<?php
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

$sql = "SELECT name, email, mobile, message FROM user_submissions ORDER BY id DESC";
$result = $conn->query($sql);

$output = "";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $output .= "<tr>
                        <td>{$row['name']}</td>
                        <td>{$row['email']}</td>
                        <td>{$row['mobile']}</td>
                        <td>{$row['message']}</td>
                    </tr>";
    }
} else {
    $output = "<tr><td colspan='4'>No submissions found.</td></tr>";
}

echo $output;
$conn->close();
?>
