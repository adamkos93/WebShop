using AutoMapper;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;
using WebShop.Infrastucture.DTO;
using WebShop.Infrastucture.Helpers.Encrypter;

namespace WebShop.Infrastucture.Services.ServiceUser
{
    public class ServiceUser : IServiceUser
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IEncrypter _encrypter;
        private readonly IJwtHandler _jwtHandler;
        public ServiceUser(IUserRepository userRepository, IMapper mapper, IEncrypter encrypter, IJwtHandler jwtHandler)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _encrypter = encrypter;
            _jwtHandler = jwtHandler;
        }

        public async Task<Tuple<TokenDto,int>> LoginAsync(UserDto user)
        {
            if (user.Email == null || user.Password == null) { throw new ArgumentNullException($"{nameof(user.Email)},{nameof(user.Password)}"); }
            var domainUser = await _userRepository.GetAsync(user.Email);
            if (domainUser == null) { throw new Exception($"User with email: {user.Email} doesn't exists."); }
            var hash = _encrypter.GetHash(user.Password, domainUser.Salt);
            if (domainUser.Password == hash)
            {
                var jwt = _jwtHandler.CreateToken(domainUser);
                return Tuple.Create(new TokenDto
                {
                    Token = jwt.Token,
                    Expires = jwt.Expires,
                    Role = domainUser.Role
                }, domainUser.Id);
            }
            return Tuple.Create(new TokenDto(){},0);

            //jwt
            //configuration 
        }
        public async Task RegisterAsync(UserDto user)
        {
            if (user == null) { throw new ArgumentNullException(nameof(user)); }
            if (user.Password == null) { throw new ArgumentNullException(nameof(user.Password)); }

            var domainUser = await _userRepository.GetAsync(user.Email);
            if (domainUser != null) { throw new Exception($"User with email: {user.Email} already exists."); }

            var salt = _encrypter.GetSalt(user.Password);
            var hash = _encrypter.GetHash(user.Password, salt);

            user.Password = hash;
            user.Salt = salt;

            if (String.IsNullOrEmpty(user.Role))
            {
                user.Role = "user";
            }
            var newUser = _mapper.Map<UserDto, User>(user);
            await _userRepository.RegisterAsync(newUser);

        }
    }
}
