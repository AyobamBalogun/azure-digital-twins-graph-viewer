function displayMetrics() {
    var data =
    {
        "responses": [
            {
                "httpStatusCode": 200,
                "headers": {
                    "Transfer-Encoding": "chunked",
                    "Vary": "Accept-Encoding,Accept-Encoding",
                    "x-ms-ratelimit-remaining-subscription-reads": "11998",
                    "x-ms-request-id": "{20adcf86-33ba-40ab-a253-f04ef04b8ca4}",
                    "x-ms-correlation-request-id": "20adcf86-33ba-40ab-a253-f04ef04b8ca4",
                    "x-ms-routing-request-id": "WESTUS:20190801T210911Z:fd9f243e-def9-4afe-a055-993f5c34c6b9",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
                    "X-Content-Type-Options": "nosniff",
                    "Cache-Control": "no-cache",
                    "Date": "Thu, 01 Aug 2019 21:09:11 GMT",
                    "Server": "Microsoft-IIS/10.0",
                    "X-AspNet-Version": "4.0.30319",
                    "X-Powered-By": "ASP.NET"
                },
                "content": {
                    "cost": 0,
                    "timespan": "2019-08-01T18:08:23Z/2019-08-01T18:39:44Z",
                    "interval": "PT1M",
                    "value": [
                        {
                            "id": "/subscriptions/46bb7488-4dbe-4cc3-8b97-1287df12a366/resourceGroups/dt-su-lh-wus2-01/providers/Microsoft.EventHub/namespaces/tsievnts/providers/Microsoft.Insights/metrics/IncomingRequests",
                            "type": "Microsoft.Insights/metrics",
                            "name": {
                                "value": "IncomingRequests",
                                "localizedValue": "Incoming Requests"
                            },
                            "unit": "Count",
                            "timeseries": [
                                {
                                    "metadatavalues": [],
                                    "data": [
                                        {
                                            "timeStamp": "2019-08-01T18:17:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:18:00Z",
                                            "total": 2.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:19:00Z",
                                            "total": 37.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:20:00Z",
                                            "total": 86.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:21:00Z",
                                            "total": 96.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:22:00Z",
                                            "total": 72.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:23:00Z",
                                            "total": 26.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:24:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:25:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:26:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:27:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:28:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:29:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:30:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:31:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:32:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:33:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:34:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:35:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:36:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:37:00Z",
                                            "total": 0.0
                                        },
                                        {
                                            "timeStamp": "2019-08-01T18:38:00Z",
                                            "total": 0.0
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "namespace": "microsoft.eventhub/namespaces",
                    "resourceregion": "westus2"
                },
                "contentLength": 2054
            }
        ]
    }
    // Put the data into a variable and format with HTML tags
    var output = "<table style=\"width:100%\"> <tr> <th>TimeStamp</th> <th>Total</th></tr>"
    for (var i in data.responses[0].content.value[0].timeseries[0].data) {
        output += "<tr>";
        output += "<td>" + data.responses[0].content.value[0].timeseries[0].data[i].timeStamp + "</td>";
        output += "<td>" + data.responses[0].content.value[0].timeseries[0].data[0].total + "</td>";
        output += "</tr>";
    }
    output += "</table>";
    // Load the above function when the window loads
    // Output the data to the "artistlist" element
    document.getElementById("artistlist").innerHTML = output;
}
window.onload = displayMetrics;
