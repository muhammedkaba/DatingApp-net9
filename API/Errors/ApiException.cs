using System;
using Microsoft.AspNetCore.Diagnostics;

namespace API.Errors;

public class ApiException(int statusCode, string message, string? details)
{
    public int StatusCode { get; set; } = statusCode;
    public string message { get; set; } = message;
    public string? details { get; set; } = details;
}
