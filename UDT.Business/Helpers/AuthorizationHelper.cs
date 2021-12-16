using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using UDT.Business.Interfaces;
using UDT.Model;

namespace UDT.Business.Helpers
{
	public class AuthorizationHelper : IAuthorizationHelper
	{
		private readonly AuthorizationSettings _authorizationSettings;

		public AuthorizationHelper(IOptions<AuthorizationSettings> authorizationSettings)
		{
			_authorizationSettings = authorizationSettings.Value;
		}
		public bool IsTokenValid(string token)
		{
			SecurityToken validatedToken;
			try
			{
				var tokenHandler = new JwtSecurityTokenHandler();
				var secretKey = Encoding.ASCII.GetBytes(_authorizationSettings.Secret);

				tokenHandler.ValidateToken(token, new TokenValidationParameters
				{
					ValidateLifetime = true,
					ValidateIssuer = true,
					ValidateAudience = true,
					ValidateIssuerSigningKey = true,

					ValidIssuer = _authorizationSettings.Issuer,
					ValidAudience = _authorizationSettings.Audience,
					IssuerSigningKey = new SymmetricSecurityKey(secretKey),
				}
				, out validatedToken);
			}
			catch
			{
				return false;
			}

			return true;
		}
	}
}
